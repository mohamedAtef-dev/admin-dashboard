import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Header from "../../components/header";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  address1: string;
  address2: string;
  role: string;
};

    const data = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'User',
    label: 'User',
  },
];

const regEmail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regPhone = /^01[0125][0-9]{8}$/;

type SnackbarState = {
  open: boolean;
  vertical: 'top' | 'top';
  horizontal: 'right';
};

const Form = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

  const [state, setState] = useState<SnackbarState>({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal, open } = state;

  const onSubmit: SubmitHandler<Inputs> = () => {
    console.log("data");
    setState({ ...state, open: true });
  }

  const handleClose = () => {
    setState({ ...state, open: false });
  };

    return(
    <Box
    onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      noValidate
      autoComplete="off"
    >

      <Header title={"CREATE USER"} subTitle={"Create a New User Profile"} />
<Stack sx={{gap: 2}} direction={"row"}> 

    
        <TextField 
        error={Boolean(errors.firstName)} 
        helperText={
            errors.firstName?.type === "required" 
                ? "This Field Is Required" 
                : errors.firstName?.type === "minLength" 
                ? "Min Length is 3 characters" 
                : null
        }

        {...register("firstName", { required: true, minLength: 3 })}

        sx={{flex: 1}} label="FirstName" variant="filled" />

        <TextField 
                error={Boolean(errors.lastName)} 
        helperText={
            errors.lastName?.type === "required" 
                ? "This Field Is Required" 
                : errors.lastName?.type === "minLength" 
                ? "Min Length is 3 characters" 
                : null
        }

        {...register("lastName", { required: true, minLength: 3 })}
        sx={{flex: 1}} label="LastName" variant="filled" />

</Stack>

      <TextField 
        error={Boolean(errors.email)} 
        helperText={
            errors.email?.type === "required" 
            ? "This Field Is Required" 
            : errors.email?.type === "pattern" 
            ? "Please provide a valid email address" 
            : null
        }
        {...register("email", { required: true, pattern: regEmail })}

      label="Email" variant="filled" />

      <TextField 
        error={Boolean(errors.contactNumber)} 
        helperText={
            errors.contactNumber?.type === "required" 
            ? "This Field Is Required" 
            : errors.contactNumber?.type === "pattern" 
            ? "Please provide a valid contactNumber address" 
            : null
        }

        {...register("contactNumber", { required: true, pattern: regPhone })}
      
      label="Contact Number" variant="filled" />
      
      <TextField label="Adress 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
              <TextField
          id="filled-select-currency"
          select
          label="Role"
          defaultValue="Admin"
          variant="filled"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{textAlign: "right"}}>
        <Button type="submit"
        sx={{textTransform: "capitalize"}} variant="contained">
            Creat New User
        </Button>

  <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          <Alert 
            onClose={handleClose} 
            variant="filled" 
            severity="info" 
            sx={{ width: '100%' }}
          >
            Account created successfully
          </Alert>
        </Snackbar>

        </Box>
    </Box>
    );
}

export default Form;
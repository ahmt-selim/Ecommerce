import { LockOutline } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import requests from "../../api/requests";

export default function LoginPage()
{
    // // const [username, SetUsername] = useState("");
    // // const [passowrd, SetPassword] = useState("");

    // const [values, setValues] = useState({
    //     username: "",
    //     password: ""
    // });

    // function handleSubmit(e: any)
    // {
    //     e.preventDefault();
    //     console.log(values);
    //     requests.Account.login(values);
    // }

    // function handleInputChange (e: any){
    //     const{name, value} = e.target;
    //     setValues({...values, [name]: value})
    // }

    const {register, handleSubmit} = useForm({
        defaultValues: {
            username: "",
            password: ""
        }
    });

    async function submitForm(data: FieldValues){
       await requests.Account.login(data);
        console.log(data); 
    }

    return (
        <Container maxWidth="xs">
            <Paper sx={{marginTop: 8, padding: 2}} elevation={3}>
                <Avatar sx={{mx: "auto", color: "secondary.main", textAlign: "center", mb: 1}}>
                    <LockOutline/>
                </Avatar>
                <Typography component="h1" variant="h5" sx={{textAlign: "center"}}>Login</Typography>
                <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{mt: 2}}>

                    <TextField {...register("username")} label="Enter username" fullWidth required autoFocus sx={{mb:2}} size="small"></TextField>
                    <TextField {...register("password")} label="Enter password" type="password" fullWidth required autoFocus sx={{mb:2}} size="small"></TextField>

                    <Button type="submit" variant="contained" fullWidth sx={{mt:1}}>Login</Button>
                </Box>
            </Paper>
        </Container>
    )
}
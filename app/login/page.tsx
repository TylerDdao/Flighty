import LoginForm from "../ui/login-form";

export default function LoginPage(){
    return(
        <div className="min-h-screen">
            <div className="flex justify-center mt-[20px]">
                <div className="w-[150px]"><img src ="logo/logo-primary-color.png"/></div>
            </div>
            <div className="mt-[50px]">
                <LoginForm/>
            </div>
        </div>
    )
}
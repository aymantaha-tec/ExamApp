import Heading from "../../shared/components/heading.tsx";
import LoginForm from "../../components/login/form/login-form.tsx";

export default function LoginPage() {
  return (
    <div className="container m-5 flex max-w-138 grow flex-col">
      {/* Heading */}
      <Heading className="py-2.5">Login</Heading>

      {/* Form */}
      <LoginForm />
    </div>
  );
}

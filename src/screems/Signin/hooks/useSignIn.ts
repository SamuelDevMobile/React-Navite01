import {Keyboard} from 'react-native';
import * as Yup from 'yup';

export default function SignIn() {
  const initialValues = {email: '', pass: ''};

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Formato de e-mail inválido')
      .required('Campo obrigatório'),
    pass: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
  });

  const goToDash = (params: any, setSubmitting: (param: boolean) => void) => {
    Keyboard.dismiss();
    setTimeout(() => {
      setSubmitting(false);
      console.log(params);
    }, 5000);
    //navigation.replace('Dashboard');
  };

  return {
    initialValues,
    SignInSchema,
    goToDash,
  };
}

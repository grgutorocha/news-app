import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { formsService } from 'src/api/services/forms';
import { notificator } from 'src/utils/notificator';
import { constants } from 'src/utils/constants';

import { FormRow, ButtonSubmit, ErrorMessageStyled } from './styles';

const { VALIDATION } = constants;

const initialValues: IWorkWithUs = {
  name: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  file: '',
};

const contactUsSchema = Yup.object().shape({
  name: Yup.string().required(VALIDATION.WORK_WITH_US.REQUIRED),
  email: Yup.string().email(VALIDATION.WORK_WITH_US.EMAIL_VALID).required(VALIDATION.WORK_WITH_US.REQUIRED),
  file: Yup.string().required(VALIDATION.WORK_WITH_US.REQUIRED),
});

export const FormView = () => {
  const onSubmit = async (values: IWorkWithUs, formikHelpers: FormikHelpers<IWorkWithUs>) => {
    try {
      await formsService.workWithUs(values);

      formikHelpers.resetForm();
      notificator.success(constants.MESSAGE.SUCCESS.WORK_WITH_US);
    } catch (error: any) {
      if (error.response && error.response.data) {
        const responseData = error.response.data;
        const responseErrors = responseData.errors;

        formikHelpers.setErrors({
          name: Boolean(responseErrors && responseErrors.name) ? responseErrors.name[0] : '',
          email: Boolean(responseErrors && responseErrors.email) ? responseErrors.email[0] : '',
          file: Boolean(responseErrors && responseErrors.file) ? responseErrors.file[0] : '',
        });

        notificator.error(responseData.message);
      } else {
        notificator.error(constants.MESSAGE.ERROR.WORK_WITH_US);
      }
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={contactUsSchema}>
      {({ isSubmitting, isValid }) => (
        <Form>
          <FormRow>
            <label htmlFor="name">Nome Completo*</label>
            <Field name="name" />
            <ErrorMessage name="name" component={ErrorMessageStyled} />
          </FormRow>
          <FormRow>
            <label htmlFor="email">E-mail*</label>
            <Field name="email" />
            <ErrorMessage name="email" component={ErrorMessageStyled} />
          </FormRow>
          <FormRow>
            <label htmlFor="phone">Telefone</label>
            <Field name="phone" />
            <ErrorMessage name="phone" component={ErrorMessageStyled} />
          </FormRow>
          <FormRow>
            <label htmlFor="city">Cidade</label>
            <Field name="city" />
            <ErrorMessage name="city" component={ErrorMessageStyled} />
          </FormRow>
          <FormRow>
            <label htmlFor="state">Estado</label>
            <Field name="state" as="select">
              <option value="">Selecione</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AM">AM</option>
              <option value="AP">AP</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MG">MG</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="PR">PR</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="RS">RS</option>
              <option value="SC">SC</option>
              <option value="SE">SE</option>
              <option value="SP">SP</option>
              <option value="TO">TO</option>
            </Field>
            <ErrorMessage name="state" component={ErrorMessageStyled} />
          </FormRow>
          <FormRow>
            <label htmlFor="file">Anexar Currículo*</label>
            <Field name="file" />
            <ErrorMessage name="file" component={ErrorMessageStyled} />
          </FormRow>
          <ButtonSubmit type="submit" disabled={isSubmitting || !isValid}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </ButtonSubmit>
        </Form>
      )}
    </Formik>
  );
};

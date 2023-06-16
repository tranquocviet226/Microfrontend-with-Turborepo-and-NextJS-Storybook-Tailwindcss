import * as yup from 'yup'
import i18n from '@/utils/config/i18n'

const { t } = i18n

const loginSchema = yup
  .object({
    email: yup
      .string()
      .email(t('validation.email.isEmail'))
      .required(t('validation.email.required')),
    password: yup.string().required(t('validation.password.required')),
  })
  .required()

export default loginSchema

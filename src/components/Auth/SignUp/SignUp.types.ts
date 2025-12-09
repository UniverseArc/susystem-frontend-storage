import type { RuleItem } from "@douyinfe/semi-ui/lib/es/form"

export interface FormInputs {
  username: string
  password: string
}

export const validateRulesUsername: RuleItem[] = [
  { required: true, message: "Введите email" },
  { type: 'string', message: 'Email строкой' },
  {
    validator: (_, value) => {
      if (!value) return false
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value)
    },
    message: "Введите корректный email (пример: test@mail.com)",
  },
]

export const validateRulesPswd: RuleItem[] = [
  {
    validator: (_, value) => {
      if (!value) {
        return false; // поле пустое
      }
      return value.length >= 4; // длина >= 4
    },
    message: "Пароль должен быть не пустым и минимум 4 символа",
  },
];
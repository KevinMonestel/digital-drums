import { generateClasses } from '@formkit/themes'
import { DefaultConfigOptions } from '@formkit/vue'
import theme from './formkit-theme'

// Create some re-useable definitions because
// many input types are identical in how
// we want to style them.
const textClassification = {
  label: 'block mb-1 font-bold text-sm formkit-invalid:text-red-500',
  inner: `
    max-w-md
    border
    border-gray-400
    formkit-invalid:border-red-500
    rounded-lg mb-1
    overflow-hidden
    focus-within:border-blue-500
  `,
  input:
    'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
}

const boxClassification = {
  fieldset: 'max-w-md border border-gray-400 rounded-md px-2 pb-1',
  legend: 'font-bold text-sm',
  wrapper: 'flex items-center mb-1 cursor-pointer',
  help: 'mb-2',
  input:
    'form-check-input appearance-none h-5 w-5 mr-2 border border-gray-500 rounded-sm bg-white checked:bg-blue-500 focus:outline-none focus:ring-0 transition duration-200',
  label: 'text-sm text-gray-700 mt-1',
}

const buttonClassification = {
  wrapper: 'mb-1',
  input:
    'bg-blue-500 hover:bg-blue-700 text-white text-sm font-normal py-3 px-5 rounded',
}

const config: DefaultConfigOptions = {
  config: {
    classes: generateClasses(theme)
  }
}

export default config
import { InputHTMLAttributes, forwardRef } from 'react'
import Icon from './Icon'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  input?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', input = '1', ...props }, ref) => {
    switch (input) {
      case "4":
        return (
          <div className="flex gap-4 items-center">
            <div className='bg-gray-100 w-40 h-10 rounded'></div>
            <div className='bg-gray-100 w-64 h-10 rounded flex-1'></div>
          </div>
        );
        break;
      
      
      case "3":
        return (
          <div className="flex gap-4 items-center">
            <div className='bg-gray-100 w-20 md:w-40 h-10 rounded'></div>
            <div className='bg-gray-100 w-64 h-10 rounded flex-1'></div>
            <div className='bg-gray-100 w-10 h-10 rounded-full'>
              <Icon />
            </div>
          </div>
        );
        break;
      
      case "2":
        return (
          <div className="flex gap-4 items-center">
            <div className='bg-gray-100 w-20 md:w-40 h-10 rounded'></div>
            <div className='bg-gray-100 w-40 h-10 rounded flex-1'></div>
            <div className='bg-gray-100 w-24 h-24 md:w-40 md:h-40 rounded-full'></div>
          </div>
        );
        break;

      default:
        return (
          <div className="flex-1">
            {label && (
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
            )}
            <input
              ref={ref}
              className={`w-full px-4 py-2 border rounded-lg bg-transparent border-0 focus:outline-none focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'
                } ${className}`}
              {...props}
            />
            {error && (
              <p className="mt-1 text-sm text-red-500">
                {error}
              </p>
            )}
          </div>
        )
        break;
    }
  }
)

Input.displayName = 'Input'

export default Input

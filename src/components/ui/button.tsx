import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'outline'
  size?: 'icon' | 'default'
}

export function Button({ children, variant, size, className, ...props }: ButtonProps) {
  const baseClasses = 'py-2 px-4 rounded-md'
  const variantClasses = variant === 'outline' ? 'border border-gray-500' : ''
  const sizeClasses = size === 'icon' ? 'p-2' : ''

  return (
    <button className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`} {...props}>
      {children}
    </button>
  )
}

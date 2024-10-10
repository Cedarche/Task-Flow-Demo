import { clsx } from 'clsx'

import { gradientColors } from '@/lib/constants'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        `bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#d6fffe]  from-[28%] via-[#9da0ff] via-[70%] to-[#8c00ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]`,
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          `bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#d6fffe] from-[28%] via-[#9da0ff] via-[70%] to-[#8c00ff]`,
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}

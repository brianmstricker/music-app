interface PlayerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  title: string
}

const PlayerButton: React.FC<PlayerButtonProps> = ({
  children,
  title,
  ...props
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <button
      className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center relative group shrink-0"
      {...props}
    >
      <span className="absolute -top-10 whitespace-nowrap opacity-0 group-hover:opacity-100 bg-neutral-800 border border-white/10 px-0.5 md:px-1 py-0.5 rounded-md transition-opacity duration-300 pointer-events-none">
        {title}
      </span>
      {children}
    </button>
  )
}
export default PlayerButton

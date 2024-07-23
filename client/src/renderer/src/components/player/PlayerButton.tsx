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
    <button className="w-8 h-8 flex items-center justify-center relative group shrink-0" {...props}>
      <span className="absolute -top-10 whitespace-nowrap opacity-0 group-hover:opacity-100 bg-neutral-800 border border-white/10 px-1 py-0.5 rounded-md transition-opacity duration-300">
        {title}
      </span>
      {children}
    </button>
  )
}
export default PlayerButton

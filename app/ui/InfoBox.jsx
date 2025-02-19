import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function InfoBox({ children, title }) {
  const id = title.replace(" ", "_");
  return (
    <div className="flex flex-col gap-4 border-y">
      <label htmlFor={id} className='flex items-center gap-2 peer cursor-pointer'>
        <input type="checkbox" id={id} name={id} className="hidden peer"/>
        <div className='peer-checked:rotate-90'>
          <PlayArrowIcon />
        </div>
        {title}
      </label>
      <div className='peer-has-[:checked]:block hidden'>
        {children}
      </div>
    </div>
  )
}
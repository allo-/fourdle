import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Fourdle" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Fourdle is a NSFW variant of the open source version of the word guessing game we all know and
        love. {' '}
        Check out the <a href="https://github.com/allo-/fourdle" className="underline font-bold">
          Fourdle code
        </a> here and{' '}
        <a href="https://github.com/cwackerfuss/react-wordle" className="underline font-bold">
          the code of the original
        </a> here.{' '}
      </p>
    </BaseModal>
  )
}

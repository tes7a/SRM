import cn from 'classnames'

import { SpinnerSVG } from '../../assets/icons'
import './styles.scss'

export interface LoaderProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Loader(props: LoaderProps) {
  const { className, size = 'md' } = props
  return <SpinnerSVG className={cn(`spinner ${size}`, className)} />
}

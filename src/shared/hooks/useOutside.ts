import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type TypeOut = {
	ref: any
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initVisible: boolean) => {
	const [isShow, setIsShow] = useState<boolean>(initVisible)
	const ref = useRef<HTMLElement>(null)

	const hanleClick = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', hanleClick, true)
		return () => {
			document.removeEventListener('click', hanleClick, true)
		}
	})

	return { ref, isShow, setIsShow }
}

import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"



export const Loading = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
	return <Loader2 className={cn('h-6 w-6 animate-spin', children && 'mr-2', className)} />
}

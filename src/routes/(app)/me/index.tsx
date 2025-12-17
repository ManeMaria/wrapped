import { createFileRoute } from '@tanstack/react-router'
import { UserPage } from '@/modules/loomer/pages'

export const Route = createFileRoute('/(app)/me/')({
  component: UserPage
})

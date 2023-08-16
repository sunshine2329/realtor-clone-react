import { OAuth } from '../buttons'
import AskAction, { AskActionProps } from '../AskAction'

type AuthSectionProps = {
  title: string
  askProps: AskActionProps
  form: React.ReactNode
  actionButton: React.ReactNode
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
const AuthSection: React.FC<AuthSectionProps> = (props: AuthSectionProps) => {
  const { title, askProps, form, actionButton, onSubmit } = props
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">{title}</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            {form}
            <AskAction {...askProps} />
            {actionButton}
            <div className="flex my-4 items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}

export default AuthSection

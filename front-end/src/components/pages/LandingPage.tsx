import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { MapPinIcon, TreePineIcon } from 'lucide-react'

export const LandingPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempted with:', email, password)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="w-full max-w-md space-y-6 sm:space-y-8">
        <Header />
        <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} onSubmit={handleSubmit} />
      </main>
      <Footer />
    </div>
  )
}

const Header = () => (
  <section className="text-center space-y-3 sm:space-y-4">
    <div className="flex justify-center space-x-2">
      <TreePineIcon className="h-8 w-8 sm:h-12 sm:w-12 text-primary" />
      <MapPinIcon className="h-8 w-8 sm:h-12 sm:w-12 text-primary" />
    </div>
    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Trailance</h1>
    <p className="text-lg sm:text-xl text-muted-foreground">
      Empowering trail maintainers to keep our paths pristine
    </p>
  </section>
)

interface LoginFormProps {
  email: string
  setEmail: (email: string) => void
  password: string
  setPassword: (password: string) => void
  onSubmit: (e: React.FormEvent) => void
}

const LoginForm = ({ email, setEmail, password, setPassword, onSubmit }: LoginFormProps) => (
  <Card className="w-full">
    <CardHeader className="space-y-1">
      <CardTitle className="text-2xl">Login</CardTitle>
      <CardDescription>Enter your email and password to access your dashboard</CardDescription>
    </CardHeader>
    <CardContent>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="you@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full">Log in</Button>
      </form>
    </CardContent>
    <CardFooter className="flex justify-center">
      <p className="text-sm text-muted-foreground">
        Don't have an account? <a href="#" className="text-primary hover:underline">Sign up</a>
      </p>
    </CardFooter>
  </Card>
)

const Footer = () => (
  <footer className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-muted-foreground">
    © 2023 Trailance. All rights reserved.
  </footer>
)

export default LandingPage
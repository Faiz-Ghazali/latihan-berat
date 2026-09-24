import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

function UserForm() {
  return (
    <div className="mx-auto w-full max-w-lg rounded-lg border bg-card p-4 shadow-sm sm:p-6">
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Biodata</h2>
        <p className="text-sm text-muted-foreground">
          Enter your personal information.
        </p>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Textarea
            id="address"
            name="address"
            placeholder="Your address"
            rows={4}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Save biodata
        </Button>
      </form>
    </div>
  )
}

export default UserForm

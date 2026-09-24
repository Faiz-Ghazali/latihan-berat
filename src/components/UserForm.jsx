import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

function UserForm() {
  return (
    <div className="w-full rounded-lg border bg-card p-4 shadow-sm sm:p-6 text-left">
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight text-left">Biodata</h2>
        <p className="text-sm text-muted-foreground text-left">
          Enter your personal information.
        </p>
      </div>

      <form className="space-y-4">
        <div className="space-y-2 text-left">
          <Label htmlFor="name" className="block text-left">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>

        <div className="space-y-2 text-left">
          <Label htmlFor="email" className="block text-left">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="space-y-2 text-left">
          <Label htmlFor="address" className="block text-left">Address</Label>
          <Textarea
            id="address"
            name="address"
            placeholder="Your address"
            rows={4}
            required
          />
        </div>

        <Button type="submit" className="w-full sm:w-auto">
          Save biodata
        </Button>
      </form>
    </div>
  )
}

export default UserForm
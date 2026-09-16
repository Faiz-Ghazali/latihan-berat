import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

function About() {
  return (
    <div className="mx-auto max-w-3xl p-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">About Us</h1>
      <p className="mb-4 text-base leading-7 text-gray-600">
        We are a small team passionate about learning, creating, and sharing
        meaningful digital experiences.
      </p>
      
      <p className="mb-4 text-base leading-7 text-gray-600">
        Our mission is to make technology easier to understand and more useful
        for everyday people.
      </p>
      <p className="text-base leading-7 text-gray-600">
        Through creativity and dedication, we build solutions that inspire
        growth and innovation.
      </p>
      <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="terms-checkbox-basic">
          Accept terms and conditions
        </FieldLabel>
      </Field>
    </FieldGroup>
    </div>
    
  );
}

export default About;

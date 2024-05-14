import { rates } from "../../data/rates";
import Label from "./Label";
import Textarea from "./Textarea";

const Form = ({ star }) => {
  return (
    <form className="mt-6 flex flex-col space-y-6">
      <section className="flex flex-col gap-2">
        <Label>
          1. What challenges or problems did our business solve for you?
        </Label>
        <Textarea />
      </section>
      <section className="flex flex-col gap-2">
        <Label>
          2. Why did you choose Highly Succeed?
        </Label>
        <Textarea />
      </section>
      <section className="flex flex-col gap-2">
        <Label>
          3. Did we exceed your expectations? If so, how?
        </Label>
        <Textarea />

      </section>
      <section className="flex flex-col gap-2">
        <Label>
          4. What would you tell your friends or colleagues who ask about Highly Succeed?
        </Label>
        <Textarea />

      </section>
      <section className="flex flex-col gap-y-4">
        <Label>
          5. How likely are you to recommend our services to a friend or colleague?
        </Label>
        <section className="flex flex-wrap mlg:w-[20rem] gap-y-4 gap-x-6">
          {rates.map(rate => (
            <section key={rate.id} className="flex items-center gap-1">
              <input type="radio" name="rates" className=" mlg:w-4 mlg:h-4" />
              <label htmlFor={rate.label} className="text-sm mlg:">{rate.label}</label>
            </section>
          ))}
        </section>
      </section>
      <section className="flex flex-col gap-2">
        <Label>
          6. How will you rate your overall experience with Highly Succeed
        </Label>
        <section className="flex gap-5">
          {star}
        </section>
      </section>
      <section className="flex flex-col gap-2">
        <Label>
          7. What else would you like us to know?
        </Label>
        <Textarea />
      </section>

      <button
        onClick={(e) => e.preventDefault()}
        className="bg-[#BE9D40] text-white text-lg rounded-lg w-32 h-10 "
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
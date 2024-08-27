import { useSelector } from "react-redux";
import { Button, TextInput } from "flowbite-react";

const DashMain = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center text-2xl tracking-widest font-semibold">
        Profile
      </h1>
      <form className="flex flex-col gap-6">
        <div className="w-32 h-32 rounded-full cursor-pointer mx-auto">
          <img
            src={currentUser.rest.imageUrl}
            alt="user"
            className="rounded-full object-cover self-center h-full w-full border-8 border-[lightgray]"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.rest.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.rest.email}
        />
        <TextInput type="password" id="password" placeholder="password" />
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Update
        </Button>
      </form>
      <div className="text-red-600 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign-out</span>
      </div>
    </div>
  );
};

export default DashMain;

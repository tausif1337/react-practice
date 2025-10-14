import ProfileImage from "./ProfileImage";

export default function ProfileInformation({ name, age, city }) {
  return (
    <div>
      <ProfileImage />
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>City: {city}</h1>
    </div>
  );
}

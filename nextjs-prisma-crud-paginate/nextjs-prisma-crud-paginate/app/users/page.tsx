import { db } from "@/lib/db";
import { UserData } from "@/src/datatmp";

const UserPage = () => {
  const onClick = async () => {
    const createMany = await db.user.createMany({
      data: UserData,
    });
  };

  return (
    <button
      onClick={() => {
        onClick;
      }}
    >
      Create user 1000 rec
    </button>
  );
};

export default UserPage;

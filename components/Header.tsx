import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import Search from "@/components/Search";
// import FileUploader from "@/components/FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";
import FileUploader from "./FileUploader";
import Search from "./Search";

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  async function handelsubmit() {
    "use server";
    await signOutUser();
  }
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />

        <Button
          type="submit"
          className="sign-out-button"
          onClick={handelsubmit}
        >
          <Image
            src="/assets/icons/logout.svg"
            alt="logo"
            width={24}
            height={24}
            className="w-6"
          />
        </Button>
      </div>
    </header>
  );
};
export default Header;

"use client";

import { deleteHabits } from "@/app/actions";
import Image from "next/image";

function DeleteButton( { habit } : { habit: string}) {
    return ( 
        <button onClick={() => deleteHabits(habit)}>
        <Image
          src={"/trash.svg"}
          width={20}
          height={20}
          alt="icone-trash red"
        />
      </button>
     );
}

export default DeleteButton;
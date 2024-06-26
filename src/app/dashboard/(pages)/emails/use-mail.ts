import { atom, useAtom } from "jotai";

import { Mail, mails } from "./data";

type Config = {
  selected: Mail["id"] | null;
};

const configAtom = atom<Config>({
  selected: mails[1].id,
});

export function useMail() {
  return useAtom(configAtom);
}

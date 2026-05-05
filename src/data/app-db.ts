import Dexie, { type Table } from 'dexie';

export type AppMetaRow = {
  key: string;
  value: unknown;
};

export type SpaceRow = {
  id: string;
  name: string;
  order: number;
};

export class StartPageDatabase extends Dexie {
  meta!: Table<AppMetaRow, string>;
  spaces!: Table<SpaceRow, string>;

  constructor() {
    super('startpage.fun');

    this.version(1).stores({
      meta: '&key',
      spaces: '&id, order'
    });
  }
}

export const appDb = new StartPageDatabase();

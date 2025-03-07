'use client';

import type { Icon } from '@/actions/get-icons';
import { ICON_LIST } from '@/icons';
import { ListSearch } from './search';
import { ListEmpty } from './empty';
import { Card, CardActions, CardTitle } from '../card';
import { useSearch } from './hooks/use-search';

type Props = {
  icons: Icon[];
};

const IconsList = ({ icons }: Props) => {
  const { results } = useSearch(icons);

  return (
    <div className="flex flex-col sm:mb-20 mb-10 mt-8 gap-6">
      <ListSearch count={icons.length} />
      {results.length === 0 && <ListEmpty />}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(165px,1fr))] gap-3">
        {results.map((icon) => {
          const IconComponent = ICON_LIST.find(
            ({ name }) => name === icon.name
          )!.icon;

          return (
            <Card key={icon.name}>
              <IconComponent />
              <CardTitle>{icon.name}</CardTitle>
              <CardActions {...icon} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export { IconsList };

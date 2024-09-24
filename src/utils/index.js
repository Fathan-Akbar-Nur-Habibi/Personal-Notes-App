const getInitialData = () => ([
    {
      id: +new Date(),
      title: 'First Note',
      body: 'This is First Note',
      archived: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: +new Date() + 1,
      title: 'Second Note',
      body: 'This is Second Note',
      archived: false,
      createdAt: new Date().toISOString(),
    }
  ]);
  
  export { getInitialData };
  
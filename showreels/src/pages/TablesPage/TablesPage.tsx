import { CompaniesTable } from './components/CompaniesTable';
import { NamesTable } from './components/NamesTable';
import { ProjectsTable } from './components/ProjectsTable';

export const TablesPage = () => {
  return (
    <>
      <NamesTable />
      <ProjectsTable />
      <CompaniesTable />
    </>
  );
};

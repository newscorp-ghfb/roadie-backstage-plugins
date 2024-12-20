import { ActivityStream } from './ActivityStream';
import React from 'react';
import { useProjectEntity, useProjectInfo, useStatuses } from '../../hooks';
import { useEntity } from '@backstage/plugin-catalog-react';
import { InfoCard } from '@backstage/core-components';

export const EntityJiraActivityStreamCard = () => {
  const { entity } = useEntity();
  const { projectKey, component, tokenType, label, instanceName } =
    useProjectEntity(entity);
  const { statuses: statusNames } = useStatuses(projectKey);
  const { ticketIds } = useProjectInfo(
    instanceName,
    projectKey,
    component,
    label,
    statusNames ?? [],
  );
  return (
    <InfoCard title="Activity Stream">
      <ActivityStream
        projectKey={projectKey}
        tokenType={tokenType}
        componentName={component}
        label={label}
        ticketIds={ticketIds}
      />
    </InfoCard>
  );
};

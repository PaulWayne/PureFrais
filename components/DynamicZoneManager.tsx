type DynamicZoneManagerType = {
  [key: string]: any;
};
type Props = {
  dynamicZone: DynamicZoneManagerType[];
  componentMapping: { [key: string]: any };
};
export const DynamicZoneManager = ({
  dynamicZone,
  componentMapping,
}: Props) => {
  return (
    <div>
      {dynamicZone.map((componentData, index) => {
        const Component = componentMapping[componentData.__component];
        if (!Component) {
          console.error(`No component found for: ${componentData._component}`);
          return null;
        }
        return <Component key={index} {...componentData} />;
      })}
    </div>
  );
};

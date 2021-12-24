
export interface INoteProps {
  id: string;
  title: string;
  description: string;
  onPress: (id: string) => any;
  date: string;
}

interface IProps {
  params: {
    slug: string;
  };
}

export default async function MealPage({ params }: IProps) {
  const { slug } = await params;

  return <div>Meal Page {slug}</div>;
}

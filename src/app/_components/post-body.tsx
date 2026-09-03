import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={`${markdownStyles["markdown"]} p-8 border-3 border-neo-black bg-neo-white shadow-neo-md`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

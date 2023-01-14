import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }) {
  return (
    <div id='article-body' className='max-w-2xl mx-auto font-Lota'>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

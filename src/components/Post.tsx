import { PostType } from '../types';

type Props = {
  postData: PostType; // 'postData' é um único 'PostType', não um array.
};

export default function Post({ postData }: Props) {
  return (
    <div>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
    </div>
  );
}

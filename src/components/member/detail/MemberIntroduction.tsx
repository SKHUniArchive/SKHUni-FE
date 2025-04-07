import { MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export const MemberIntroduction = () => {
  return (
    <div>
      <MdPreview value="소개글이 없습니다" theme="light" language="ko-KR" />
    </div>
  );
};

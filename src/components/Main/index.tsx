import { useEffect, useState } from "react";
import * as S from "./style";
import Editor, { useMonaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import editorTheme from "monaco-themes/themes/Pastels on Dark.json";
import MarkdownIt from "markdown-it";
const Main = () => {
  const mdParser = new MarkdownIt();
  const monaco = useMonaco();

  const [code, setCode] = useState<string>("");
  const [problem, setProblem] = useState<string>("gdgd");

  useEffect(() => {
    if (!monaco) return;

    monaco.editor.defineTheme(
      "editorTheme",
      editorTheme as editor.IStandaloneThemeData
    );

    monaco.editor.setTheme("editorTheme");
  }, [monaco]);

  const handleCode = (e: any) => {
    setCode(e);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Back src="/assets/back.svg" />
        <S.Title>문제 제목</S.Title>
      </S.Header>
      <S.Main>
        <S.ProblemWrap>
          
        </S.ProblemWrap>
        <Editor
          height="100%"
          width="60%"
          language="python"
          options={{
            fontSize: 15,
            minimap: {
              enabled: false,
            },
            scrollbar: {
              vertical: "auto",
              horizontal: "auto",
            },
            overviewRulerBorder: false,
            overviewRulerLanes: 0,
          }}
          onChange={handleCode}
          value={code}
        />
      </S.Main>
      <S.SubmitWrap>
        <S.Button color="#5c5c5c" $textcolor="#f1f1f1" $activecolor="#515151">
          테스트
        </S.Button>
        <S.Button color="#83ff76" $textcolor="#2b2b2b" $activecolor="#84ff76bc">
          제출
        </S.Button>
      </S.SubmitWrap>
    </S.Container>
  );
};

export default Main;

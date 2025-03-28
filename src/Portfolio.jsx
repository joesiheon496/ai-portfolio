import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";


const projects = [
  {
    title: "문서 요약 AI 서비스",
    description: "BERT 기반 모델을 활용한 문서 자동 요약 시스템. FastAPI로 API화하고 Docker로 배포.",
    tags: ["Python", "BERT", "FastAPI", "Docker"],
    link: "https://github.com/yourname/document-summarizer"
  },
  {
    title: "클라이밍 자세 분석 모델",
    description: "OpenPose와 CNN을 활용한 자세 인식 및 실시간 피드백 시스템.",
    tags: ["Pose Estimation", "OpenCV", "CNN"],
    link: "https://github.com/yourname/climbing-pose-ai"
  }
];

const skills = [
  "Python", "PyTorch", "TensorFlow", "Huggingface Transformers",
  "FastAPI", "Docker", "MLflow", "Git", "SQL", "Pandas"
];

const research = [
  {
    title: "Contrastive Learning을 활용한 멀티모달 임베딩 연구",
    description: "이미지와 텍스트 쌍을 활용한 멀티모달 검색 정확도 향상 실험.",
    link: "https://github.com/yourname/multimodal-contrastive-research"
  },
  {
    title: "시간 순서를 고려한 LSTM 기반 주가 예측 모델",
    description: "과거 데이터 패턴 기반 예측 성능 개선. MAE, RMSE 중심 분석 포함.",
    link: "https://github.com/yourname/stock-predict-lstm"
  }
];

export default function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">AI Developer Portfolio</h1>
        <p className="text-muted-foreground">
          딥러닝 기반 문제 해결에 집중하는 개발자입니다. 실험과 서비스 구현 사이의 연결고리를 만듭니다.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-sm text-gray-700">
          AI 모델 설계와 실험, MLOps 환경 구성, 서비스화까지 전주기에 걸쳐 경험을 쌓아왔습니다.
          모델 성능뿐만 아니라 실제 사용자 환경에서의 적용성과 유지보수까지 고려합니다.
        </p>
        <p className="text-sm text-gray-700">
          최근에는 멀티모달 학습과 경량화 모델, 그리고 실시간 AI 시스템 개발에 관심을 가지고 연구 및 구현 중입니다.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        {projects.map((project, idx) => (
          <Card key={idx} className="border border-gray-200">
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">GitHub</Button>
                </a>
              </div>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Research & Experiments</h2>
        {research.map((item, idx) => (
          <Card key={idx} className="border border-gray-200">
            <CardContent className="p-4 space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-md font-medium">{item.title}</h3>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">GitHub</Button>
                </a>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="pt-6 border-t text-sm text-center text-gray-400">
        Contact: your.email@example.com · GitHub: @yourname
      </footer>
    </div>
  );
}
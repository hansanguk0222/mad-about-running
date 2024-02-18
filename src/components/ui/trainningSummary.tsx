import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

// TODO. VO2Max 링 구현하기

export const TrainningSummary = () => (
  <div className="w-full border rounded-md p-4 mb-4">
    <h2 className="pb-6 text-2xl">Summary</h2>
    <div className="flex">
      <div className="pr-4 flex flex-col border-r">
        <h3 className="text-md flex justify-center pb-4">
          VO2Max
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="pl-1">
                <QuestionMarkCircledIcon />
              </TooltipTrigger>
              <TooltipContent>
                운동 능력을 최대로 발휘하는 시점에서
                <br /> 1분당 1kg의 몸무게가 소비할 수 있는 최대 산소량
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h3>
        <span className="text-md text-center">점수</span>
        <span className="text-sm text-center">평가</span>
      </div>
      <div className="pl-4 border-r">
        <h3 className="text-md flex pb-4">
          예상기록
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="pl-1">
                <QuestionMarkCircledIcon />
              </TooltipTrigger>
              <TooltipContent>
                현재 성과에 따라 레이스 거리를 아래의 시간으로 완주할 것으로
                예상합니다.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h3>
        <div className="flex text-sm justify-between">
          <div className="flex flex-col w-[100px]">
            <span>5km 기록</span>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-blue-500" />
              <span className="pl-1">5k</span>
            </div>
          </div>
          <div className="flex flex-col w-[100px]">
            <span>10km 기록</span>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500" />
              <span className="pl-1">10k</span>
            </div>
          </div>
        </div>
        <div className="flex text-sm justify-between">
          <div className="flex flex-col w-[100px]">
            <span>하프 기록</span>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-orange-500" />
              <span className="pl-1">하프</span>
            </div>
          </div>
          <div className="flex flex-col w-[100px]">
            <span>풀 기록</span>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-rose-500" />
              <span className="pl-1">풀</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-md flex justify-center pb-4">
          트레이닝 상태
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="pl-1">
                <QuestionMarkCircledIcon />
              </TooltipTrigger>
              <TooltipContent>
                총괄적인 트레이닝과 어떻게 체력에 영향을 주는지 파악
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h3>
        <div className="flex flex-col">
          <span className="text-sm text-center">무산소</span>
          <span className="text-sm text-center">고강도 유산소</span>
          <span className="text-sm text-center">저강도 유산소</span>
        </div>
      </div>
    </div>
  </div>
);

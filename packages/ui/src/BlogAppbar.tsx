
import { Button } from "./shad/ui/button";
import { Problem, Track } from "@repo/store";
import { useCallback, useEffect, useMemo } from "react";
import Link from "next/link";

export const BlogAppbar = ({ problem, track }: {problem: Problem; track: Track}) => {
    const problemIndex = useMemo(() => {
        return track.problems.findIndex(p => p === problem.id);
    }, [track, problem]);

    return <div className="mt-2 ml-2 mr-2 flex justify-between mb-2">
        <div className="flex-1 flex justify-center flex-col ml-2">
            {problem.title} ({problemIndex + 1} / {track.problems.length})
        </div>
        <div className="flex flex-1 flex-row-reverse">
            <Link prefetch={true} href={problemIndex + 1 === track.problems.length ? `/tracks/${track.id}` : `/tracks/${track.id}/${track.problems[problemIndex + 1]}`}>
                <Button variant="outline">Next 
                    <div className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </Button>
            </Link>
            <div className="pr-2"></div>
            <Link prefetch={true} href={problemIndex !== 0 ? `/tracks/${track.id}/${track.problems[problemIndex - 1]}` : `/tracks/${track.id}`}>
                <Button variant="outline" className="ml-2"> 
                    <div className="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    Prev 
                </Button>
            </Link>
        </div>
    </div>
}
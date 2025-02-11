'use server'

import { TaskImage } from "../../components/taskImage";
import { InfoPart, ButtonPart } from "../../components/infoParts";
import { host } from "@/app/components/host";

export default async function Page({params}) {
    let urls, answerUrl;
    let id = params.taskid[0];

    if (!isNaN(id)){
        try {
            let res1 = await fetch(`${host}/api/answer?id=${id}`, {method: 'GET', cache: 'no-cache'});
            answerUrl = (await res1.json()).url;
            
            let res2 = await fetch(`${host}/api/task?id=${id}`, {method: 'GET', cache: 'no-cache'});
            urls = (await res2.json()).url;
        } catch(e) {
            console.log(e);
        }
        
    }
    if (!urls || !answerUrl) {
        return (
            <div className="wrapper mx-auto flex flex-col gap-y-[30px] max-[700px]:gap-y-5 px-0 max-[1280px]:px-5">
            </div>
        )
    }
    
    return (
        <div className="wrapper mx-auto flex flex-col gap-y-[30px] max-[700px]:gap-y-5 px-0 max-[1280px]:px-5">
            <InfoPart id={id} params={params} url={urls}/>
            {urls.map(url => <TaskImage url={url} key={url}/>)}
            <ButtonPart params={params} url={urls} answerUrl={answerUrl}/>
        </div>
    )
}
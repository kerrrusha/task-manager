interface KanbanTaskData {
    "id": string,
    "title": string,
    "description": string,
    "assignedTo": string,
    "priority": string,
    "dueDate": string
}

interface KanbanTaskProps {
    data: KanbanTaskData,
}

export default function KanbanTask({data} : KanbanTaskProps) {
    return (
        <div>
            <div draggable="true"
                 className="background-secondary w-[280px] first:my-5 rounded-lg shadow-[#364e7e1a] pt-6 pb-2 px-3
                 shadow-lg hover:text-[#635fc7] cursor-pointer "
            >
                <p className="font-bold tracking-wide ">
                    {data.title}
                </p>
                <p className="text-s tracking-tighter mt-2 text-gray-500">
                    {data.description}
                </p>
                <div>
                    <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
                        Assigned to: <span>{data.assignedTo}</span>
                    </p>
                    <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
                        Priority: <span>{data.priority}</span>
                    </p>
                    <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
                        Due date: <span>{data.dueDate}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

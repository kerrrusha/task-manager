export default function KanbanTask() {
    return (
        <div>
            <div draggable="true"
                 className="background-secondary w-[280px] first:my-5 rounded-lg shadow-[#364e7e1a] pt-6 pb-2 px-3
                 shadow-lg hover:text-[#635fc7] cursor-pointer "
            >
                <p className="font-bold tracking-wide ">
                    Finish frontend part of Kanban board
                </p>
                <p className="text-s tracking-tighter mt-2 text-gray-500">
                    Complete board React component, sign-in, sign-out, user profile pages
                </p>
                <div>
                    <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
                        Assigned to: <span>Kirill</span>
                    </p>
                    <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
                        Priority: <span>High</span>
                    </p>
                    <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
                        Due date: <span>2024-02-06</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

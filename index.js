
const isValid = text=>(
    text.split("").map(
        x => x.trim()
    ).filter(
        x => x!==""
    ).reduce((a,x)=>(
        "abcdefghijklmanpqrstuvwxyz+-|!.[]".split("").reduce((b,y)=>(
            x===y || b
        ),
        false
        ) &&
        a
    ),
    true
    )
)

